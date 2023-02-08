import { useRecoilValue } from "recoil";
import { userNameState } from "../AppStates";

export function Nav() {
    const userName = useRecoilValue(userNameState)
  
    return (
      <div className="nav">
        <p>{userName}</p>
      </div>
    );
  }