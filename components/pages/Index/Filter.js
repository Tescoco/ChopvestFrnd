import styles from "./Filter.module.css"
import Slider from '@material-ui/core/Slider';
import React from "react";
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';


export default function Filter({display}) { 
    const [minAmount, setMinAmount] = React.useState(100)
    const [maxAmount, setMaxAmount] = React.useState(1000)
    const [value, setValue] = React.useState([minAmount, maxAmount]);
    const [highlightOption, setHighlightOption] = React.useState({
      option1: '',
      option2: '',
      option3: '',
      option4: '',
      option5: '',
      option6: '',
      option7: ''
    });
    const pickanOption = (prop) => (event) => {
      highlightOption[prop] == 'rgb(152, 255, 84)' ?  setHighlightOption({ ...highlightOption, [prop]: ''})
      :
      setHighlightOption({ ...highlightOption, [prop]: 'rgb(152, 255, 84)'})
    };

    const handleChange = (event, newValue) => {
        setValue(newValue);
        setMinAmount(newValue[0])
        setMaxAmount(newValue[1])
      };
    const handleChange2 = (value) => {
        setMinAmount(value)
        setValue([value,maxAmount]);
      };
    const handleChange3 = (value) => {
        setMaxAmount(value)
        setValue([minAmount,value]);
      };

    function valuetext(value) {
        return `${value}`;
      }

    return (
        <div className={styles.container}>
          <div style={{display:display}} className={styles.containerMobile}>
            <div onClick = {pickanOption('option1')}  className={styles.filter}>
              <div className={styles.filterInner}>
               <div style={{backgroundColor:highlightOption.option1}} className={styles.option}>
                 Swallow
                </div>
              </div>
            </div>
            <div onClick = {pickanOption('option2')} className={styles.filter}>
              <div className={styles.filterInner}>
               <div style={{backgroundColor:highlightOption.option2}}className={styles.option}>
                 Pasta
                </div>
              </div>
            </div>
            <div onClick = {pickanOption('option3')} className={styles.filter}>
              <div className={styles.filterInner}>
                <div style={{backgroundColor:highlightOption.option3}} className={styles.option}>
                  Below ₦3,000
                </div>
              </div>
            </div>
            <div onClick = {pickanOption('option4')} className={styles.filter}>
              <div className={styles.filterInner}>
               <div style={{backgroundColor:highlightOption.option4}} className={styles.option}>
                  + Turkey    
                </div>
              </div>
            </div>
            <div onClick = {pickanOption('option5')} className={styles.filter}>
              <div className={styles.filterInner}>
               <div style={{backgroundColor:highlightOption.option5}} className={styles.option}>
                 + Dodo   
                </div>
              </div>
            </div>
            <div onClick = {pickanOption('option6')} className={styles.filter}>
              <div className={styles.filterInner}>
               <div style={{backgroundColor:highlightOption.option6}} className={styles.option}>
                  Pastries
                </div>
              </div>
            </div>
            <div onClick = {pickanOption('option7')} className={styles.filter}>
              <div className={styles.filterInner}>
               <div style={{backgroundColor:highlightOption.option7}} className={styles.option}>
                 Liquid
                </div>
              </div>
            </div>
         </div>
          <div className={styles.containerBGS}>
             <div className={styles.BGSfilter1}>
                 <div className={styles.sliderContent}>
                     <div className={styles.decs}>
                         Price
                     </div>
                     <div className={styles.decsAction}>
                         Apply
                     </div>
                 </div>
                 <div className={styles.sliderMain}>
                  <Slider
                   value={value}
                   onChange={handleChange}
                   valueLabelDisplay="off"
                   aria-labelledby="range-slider"
                   getAriaValueText={valuetext}
                   className={styles.slider}
                   min={100}
                   max={10000}
                   />
                 </div> 
                  <div className={styles.sliderContentPrice}>
                     <div className={styles.minPrice}>
                       <div className={styles.priceInput}>
                          <FormControl fullWidth className={styles.priceInputFC}>
                          <InputLabel htmlFor="standard-adornment-amount">min</InputLabel>
                           <Input
                             id="standard-adornment-amount"
                             value={minAmount}
                             onChange={e => handleChange2(e.target.value)}
                             startAdornment={<InputAdornment position="start">₦</InputAdornment>}
                           />
                         </FormControl>
                      </div>
                     </div>
                     <div className={styles.maxPrice}>
                      <div className={styles.priceInput}>
                          <FormControl fullWidth className={styles.priceInputFC}>
                          <InputLabel htmlFor="standard-adornment-amount">max</InputLabel>
                           <Input
                             id="standard-adornment-amount2"
                             value={maxAmount}
                             onChange={e => handleChange3(e.target.value)}
                             startAdornment={<InputAdornment position="start">₦</InputAdornment>}
                           />
                         </FormControl>
                      </div>
                     </div>
                 </div>
             </div>
             <div className={styles.BGSfilter2}>
                 
              </div>
              <div className={styles.BGSfilter3}>
                 
              </div>
         </div> 
        </div>
    )
}

