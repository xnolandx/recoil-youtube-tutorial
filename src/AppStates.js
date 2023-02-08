import { atom, selector } from "recoil"

const userNameState = atom({
    key: 'username', 
    default: 'name'
  })
  
  const countState = selector({
    key: 'count', 
    get: ({get}) => {
      const userName = get(userNameState)
      return userName.length
    }
  })

  export {userNameState, countState}