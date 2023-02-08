import { useRecoilState } from "recoil";
import { userNameState } from "../AppStates";

export function Profile() {
    const [userName, setUserName] = useRecoilState(userNameState)
    return (
      <div>
        <h2>Profile:</h2>
        <p>{userName}</p>
        <input type='text' value={userName} onChange={event => {setUserName(event.target.value)}} />
      </div>
    );
  }