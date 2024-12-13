export interface Tasks {
    id: number;
    userId: string;
    category: TaskCategory;
    title: string;
    priority: string;
    dueDate: string;
    assignee: string;
}
  
export interface ToDo {
    id: string;
    text: string;
    completed: boolean;
}
export enum TaskCategory {
    Datenanalyse = "Datenanalyse",
    Cybersicherheit = "Cybersicherheit",
    Projektmanagement = "Projektmanagement",
    Qualitätssicherung = "Qualitätssicherung",
    Kundenservice = "Kundenservice & Support",
}
