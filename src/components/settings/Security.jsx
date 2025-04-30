import { useState } from "react"
import SettingsPageContainer from "./SettingsPageContainer";
import ToggleSwtich from "./ToggleSwtich";
import { Lock } from "lucide-react";

const Security = () => {
    const[multiFactor, setMultiFactor] = useState(false);
  return (
    <SettingsPageContainer icon={Lock} title={"Security"}>
        <ToggleSwtich label={"Multi Factor Notifications"}
        isOn={multiFactor}
        OnToggle={() => setMultiFactor(!multiFactor)}/>
        <button className="bg-gradient-to-br from-cyan-400 to-fuchsia-400 hover:bg-cyan-900 text-white font-bold py-2 px-4 rounded transition duration-300 w-full sm:w-auto hover:scale-95 mt-3">
            Change Security Key
        </button>

    </SettingsPageContainer>
  )
}

export default Security