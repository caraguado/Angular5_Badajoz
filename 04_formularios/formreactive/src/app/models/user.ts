
export interface User {
        nombre: string | number;
        apellido: string;
        telefono: string;
    }
    
    export class UserModel implements User {
      constructor(public nombre: string | number , public apellido: string, public telefono: string) { }
    }
    
    