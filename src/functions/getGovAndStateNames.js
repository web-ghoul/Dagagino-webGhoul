import governorates from "../data/governorates.json"

export const getGovAndStateNames = (gov,st, lang)=>{
  let governorate ;
  let state
  governorates.governorates.map((g)=>{
    if(g._id === gov) {
      if(lang === "ar"){
        governorate = g.arName
      }else{
        governorate = g.enName
      }
      g.states.map((s)=>{
        if(s._id === st){
          if(lang === "ar"){
            state = s.arName
          }else{
            state = s.enName
          }
        }
      })
    }
  })
  return {governorate , state}
}