import React, {useState, useEffect} from 'react';
import Switch from '@material-ui/core/Switch';

interface Props {
  SwitchThemeHandler: Function;
}

const  Switches: React.FC<Props> = ({SwitchThemeHandler}) => {
  const [checked, setCheked] = useState(false);


  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCheked(!checked);
  };

  useEffect(()=>
    checked ? SwitchThemeHandler('dark'):SwitchThemeHandler('light'),[checked])

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