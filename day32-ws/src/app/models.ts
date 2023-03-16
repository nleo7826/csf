export interface Task {
    task: string
    priority: 'high' | 'medium' | 'low';
    due: Date
}