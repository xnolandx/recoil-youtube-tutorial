import { useRecoilValue } from "recoil";
import { countState } from "../AppStates";

export function Count() {
    const count = useRecoilValue(countState)
    return (
      <div className="count">
        <p>Count: {count}</p>
      </div>
    );
  }