import React, { useState, useEffect } from 'react';
import Switch from '@material-ui/core/Switch';

interface Props {
  SwitchThemeHandler: Function;
}

const Switches = ({ SwitchThemeHandler }: Props) => {
  const [checked, setCheked] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCheked(!checked);
    localStorage.setItem("Nerdi@Dark", String(!checked))
  };

  useEffect(() => {
    const check = localStorage.getItem("Nerdi@Dark") == 'true' ? true : false

    if (check === true) setCheked(true)

  }, [])

  useEffect(() =>
    checked ? SwitchThemeHandler('dark') : SwitchThemeHandler('light'), [checked])

  return (
    <div>
      <Switch
        checked={checked}
        onChange={handleChange}
        color="primary"
        name="themebutton"
      />
    </div>
  );
}


export default Switches