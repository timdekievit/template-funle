
export interface Assignment {
    id: string;
    source: string;
    sourceId: string;
    customer: string;
    categoryId?: string;
    proposals: any;
    rate?: number;
    hours?: number;
    role: string;
    description: string;
    startDate?: Date;
    endDate?: Date;
    submitDate?: Date;
    withProlongation?: boolean;
    city: string;
    notes: string;
    title: string;
  }