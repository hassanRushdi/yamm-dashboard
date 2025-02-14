export interface Item {
    id: string;
    name: string;
    price: number;
    quantity: number;
  }
  
  export interface RefundOrder {
    id: string;
    reason: string;
    store_name: string;
    store_logo: string;
    store_url: string;
    amount: number;
    active: boolean;
    decision: "accept" | "reject" | "escalate" | null;
    items: Item[];
  }