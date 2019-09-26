import React from "react";
import {
  StyledChart,
  StyledSpan,
  StyledLi,
  StyledWrapper,
  StyledP
} from "./StyledChart";
import equal from 'fast-deep-equal'

class ChartComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ingredients: props.ingredient,
      dataingredient:{},
      myEntries:[],
      convertToGram:[],
      myValues: [],
      matchColors: [],
      colorText:props.color,
      data: {
        labels: [],
        datasets: [
          {
            backgroundColor: [
              "#FF6384",
              "#36A2EB",
              "#FFCE56",
              "#008000",
              "#CD853F",
              "#FF8C00"
            ]
          }
        ],
        options: {
          lineWidth: 13,
          position: "left",
          maintainAspectRatio: true,
          responsive: true,
          legend: {
            fullWidth: 100,
            padding: 10,
            display: false,
            position: "bottom",
            labels: {
              fontSize: 16,
              boxWidth: 30
            }
          }
        }
      }
    };

 
  }

  async componentDidMount() {
  

    let data = [];
    for (let ingredient of this.state.ingredients) {
     await fetch(`http://localhost:3001/api/ingredient/search/${encodeURI(ingredient.name)}`)
        .then(function(response) {
          return response.json();
        })
        .then(function(response){
         data.push(response)
       
        });
    }
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
for(let i of this.state.ingredients){
 await this.converter(i.name, i.qty, i.type)
}
  
    let {  myValues,myEntries } = this.state;
   
    let salt=[]
    let fleromattad=[]
    let enkelmattad=[]
    let kolhydrater=[]
    let protein=[]
    let mattade=[]
    const financial =(x) =>{ return Number.parseFloat(x).toFixed(2)}

    data.map((i,k)=>{
      if(i===null){ return }
      let g = this.state.convertToGram[k]
      salt.push(i.Naringsvarden.Salt/100*g) 
      fleromattad.push(i.Naringsvarden.Fleromattade/100*g)
      enkelmattad.push(i.Naringsvarden.Enkelomattade/100*g)
      mattade.push(i.Naringsvarden.Mattade/100*g)
      kolhydrater.push(i.Naringsvarden.Kolhydrater/100*g)
      protein.push(i.Naringsvarden.Protein/100*g)
    })
    
  
    myValues.push(financial(salt.reduce(reducer)),financial(fleromattad.reduce(reducer)),financial(enkelmattad.reduce(reducer)),financial(mattade.reduce(reducer)),financial(kolhydrater.reduce(reducer)),financial(protein.reduce(reducer)))

    myEntries.push('Salt','Fleromättad fett','Enkelmättad fett','Mättad fett','Kolhydrater','Protein')

    let dataCopy = { ...this.state.data };
    dataCopy.datasets[0].data = myValues;
    dataCopy.labels = myEntries;
    this.setState({ data: dataCopy });
  }



  converter(name, qty, unit) {
    const unitsToGram = {
      kg: 1000,
      hg: 100,
      g: 1,
      mg: 0.001,
      l: 1000,
      dl: 100,
      cl: 10,
      ml: 1,
      st: 60,
      tsk:3,
      msk:15
    }
   
    const exceptions = [
      { baseUnit: 'l', nameHas: 'mjöl', modifier: 0.6 },
      { baseUnit: 'l', nameHas: 'olja', modifier: 0.9 },
      { baseUnit: 'st', nameHas: 'kycklinglårfilé', modifier: 65 / unitsToGram.st },
      { baseUnit: 'st', nameHas: 'kycklingbröstfilé', modifier: 200 / unitsToGram.st },
      { baseUnit: 'st', nameHas: 'kyckling', modifier: 1200 / unitsToGram.st },
      { baseUnit: 'st', nameHas: 'lax', modifier: 3000 / unitsToGram.st }
    ];
   
    let factor = unitsToGram[unit];
   
    for (let x of exceptions) {
      if (unit.includes(x.baseUnit) && name.includes(x.nameHas)) {
        factor *= x.modifier;
        break;
      }
    }
   
    return this.state.convertToGram.push(factor * qty/10)
   
  }


  getLabels = () => {
    let { data, myEntries, myValues } = this.state;
    let colors = data.datasets[0].backgroundColor;
    
   

    const myLabels = myValues.map((item, i) => {
      let color = colors[i];
      let qty = myEntries[i]
      return (
        <StyledLi key={qty} text={this.state.colorText.textcolor}>
          <StyledSpan color={color} />
          {qty}{'  '}{item}
        </StyledLi>
      );
    });

    return myLabels;
  };

  componentDidUpdate(prevProps) {
    if(!equal(this.props.color, prevProps.color)) 
    {
      this.setState({colorText:this.props.color})
    }



  } 


  render() {
    return (
      <StyledWrapper>
        <StyledChart
          data={this.state.data}
          width={250}
          height={250}
          options={this.state.data.options}
        />
        <StyledP text={this.state.colorText.textcolor}>Näringsinnehåll per 100g</StyledP>
        {this.getLabels()}
   

      </StyledWrapper>
    );
  }
}

export default ChartComponent;
