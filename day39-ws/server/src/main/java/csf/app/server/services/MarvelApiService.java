package sg.edu.nus.iss.app.server.services;

import java.io.IOException;
import java.sql.Timestamp;
import java.util.List;
import java.util.Optional;

import org.apache.commons.codec.digest.DigestUtils;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.util.UriComponentsBuilder;

import sg.edu.nus.iss.app.server.model.MarvelCharacter;

@Service
public class MarvelApiService {

    @Value("${day39-ws.marvel.api.url}")
    private String marvelapiUrl;

    @Value("${day39-ws.marvel.api.key}")
    private String marvelPublicApiKey;

    @Value("${day39-ws.marvel.priv.key}")
    private String marvelPrivateApiKey;

    private String[] getMarvelApiHash(){
        String [] result = new String[2];
        Timestamp timestamp = new Timestamp(System.currentTimeMillis());
        long tsVal = timestamp.getTime();
        String hashVal = tsVal + marvelPrivateApiKey + marvelPublicApiKey;
        result[0] = tsVal+"";
        result[1] = DigestUtils.md5Hex(hashVal);
        return result;
    }

    public Optional<List<MarvelCharacter>> getCharacters(String characterName,
            Integer limit , Integer offset){
        ResponseEntity<String> resp = null;
        List<MarvelCharacter> c = null;
        System.out.println(marvelPublicApiKey);
        String[] r = getMarvelApiHash();
        System.out.println(r[0]);
        System.out.println(r[1]);
        
        String marvelCharApiUrl = UriComponentsBuilder
                                    .fromUriString(marvelapiUrl + "characters")
                                    .queryParam("ts", r[0].trim())
                                    .queryParam("apikey", marvelPublicApiKey.trim())
                                    .queryParam("hash", r[1])
                                    .queryParam("nameStartsWith", 
                                        characterName.replaceAll(" ", "+"))
                                    .queryParam("limit", limit)
                                    .queryParam("offset", offset)
                                    .toUriString();
        System.out.println(marvelCharApiUrl);
        RestTemplate template = new RestTemplate();
        resp = template.getForEntity(marvelCharApiUrl,String.class);
        System.out.println(resp);
        try {
            c = MarvelCharacter.create(resp.getBody());
        } catch (IOException e) {
            e.printStackTrace();
        }
        System.out.println(c);
        if(c != null)
            return Optional.of(c);                        
        return Optional.empty();
    }

    public Optional<MarvelCharacter> getCharacterDetails(String characterId) 
            throws IOException{
        ResponseEntity<String> resp = null;
        MarvelCharacter c = null;
        System.out.println(marvelPublicApiKey);
        String[] r = getMarvelApiHash();
        System.out.println(r[0]);
        System.out.println(r[1]);
        
        String marvelCharApiUrl = UriComponentsBuilder
                                    .fromUriString(marvelapiUrl + "characters/" + characterId)
                                    .queryParam("ts", r[0].trim())
                                    .queryParam("apikey", marvelPublicApiKey.trim())
                                    .queryParam("hash", r[1])
                                    .toUriString();
        System.out.println(marvelCharApiUrl);
        RestTemplate template = new RestTemplate();
        resp = template.getForEntity(marvelCharApiUrl,String.class);
        System.out.println(resp);
        List<MarvelCharacter> cArr = MarvelCharacter.create(resp.getBody());
        c = cArr.get(0);
        System.out.println(c);
        if(c != null)
            return Optional.of(c);                        
        return Optional.empty();
    }
    
}
