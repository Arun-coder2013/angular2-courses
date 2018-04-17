import {AbstractControl,ValidationErrors} from '@angular/forms';

export class UserNameValidator{
    
    static cannotContainSpace(control:AbstractControl):ValidationErrors | null{
        
        if ((control.value as string).indexOf(' ') > 0 )
            return {cannotContainSpace:true};
        return null;    

    }
    static uniqueUserName(control:AbstractControl):Promise<ValidationErrors | null>{
          return new Promise((resolve,reject)=>{
              setTimeout(()=>{
               if (control.value  === 'arun' )
                     resolve({uniqueUserName:true});
               else 
                    resolve(null);        
           },2000);

          });
           
        

    }
}