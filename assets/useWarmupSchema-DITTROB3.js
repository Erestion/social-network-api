import{t as e}from"./useQuery-B7YtUOLW.js";import{c as t,l as n,s as r}from"./openapi-CznOPohE.js";var i=t(`
  query SchemaWarmup($input: JSON!, $type: SchemaType!) {
    schema(input: $input, type: $type) {
      openapi
    }
  }
`),a=()=>{let{input:t,type:a}=r();e({...n(i,{input:t,type:a}),enabled:typeof window<`u`,notifyOnChangeProps:[]})};export{a as t};
//# sourceMappingURL=useWarmupSchema-DITTROB3.js.map