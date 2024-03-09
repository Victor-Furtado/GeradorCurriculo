export interface IInput {
    name: string;
    type?: string;
    label?: string;
    conf?: {
        placeholder: string;
        icon: string;
    };
}

export interface ISection {
    title: string;
    icon: string;
    inputs: IInput[];
}