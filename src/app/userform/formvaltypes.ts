export interface formtype{
    labelName:string,
    formControlName:string,
    defaultValue?:string,
    inputType: 'checkbox'|'text'|'dropdown',
    dropDownVal?: []
}