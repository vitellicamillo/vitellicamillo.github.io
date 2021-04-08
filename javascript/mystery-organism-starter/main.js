// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

function toPercent(number, float) {
  let percent = parseFloat(number * 100).toFixed(float) + "%";
  return percent;
}

const pAequorFactory = (number, dnaBaseArray) => {
  return {
    specimenNum: number,
    dna: dnaBaseArray,

    mutate () {
      let randomIndex = Math.floor(Math.random()*15);
      let newBase = returnRandBase();
      if(this.dna[randomIndex] === newBase){
        this.mutate();
      }else{
        this.dna[randomIndex] = newBase;
        return this.dna;
      }
    },

    compareDNA (pAequorObject) {

      let equalElements = 0 ;

      for(let i = 0; i < this.dna.length; i++){
        if (this.dna[i] === pAequorObject.dna[i]){
          equalElements += 1; 
        }
      };

      let equalityRatio = (equalElements/15);
      return `Specimen ${this.specimenNum} and specimen ${pAequorObject.specimenNum} have ${toPercent(equalityRatio,2)} DNA in common`;
    },

    willLikelySurvive() {
      let sum = 0;  
      this.dna.forEach(base => {
        if(base === 'C' || base === 'G'){
          sum += 1;
        }
      });

      if(sum/15 > 0.6){
        return true;
      }else{
        return false;
      }
    }
  }
};

function createSpecimens(number){

  let specimens = [];
  let count = 1;
    while(specimens.length < number){
  
      specimen = pAequorFactory(count, mockUpStrand());
      if(specimen.willLikelySurvive()){
       specimens.push(specimen);
      }
      count++;
    }
  return specimens;
  }
/*
let firstDNA = mockUpStrand();
let firstOrganism =pAequorFactory(1,firstDNA);
let secondDNA = mockUpStrand();
let secondOrganism = pAequorFactory(2,secondDNA);

console.log(firstOrganism.dna);
//firstOrganism.mutate();
console.log(secondOrganism.dna);
//secondOrganism.mutate();

console.log(firstOrganism.compareDNA(secondOrganism));
console.log(firstOrganism.willLikelySurvive());
console.log(secondOrganism.willLikelySurvive());
*/

console.log(createSpecimens(30));


