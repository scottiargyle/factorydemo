// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G']
  return dnaBases[Math.floor(Math.random() * 4)] 
}

// Returns a random single strand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = []
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase())
  }
  return newStrand
}

//Factory
function pAequorFactory(num, dnaArray){
  return {
    specimenNum: num,
    dna: dnaArray,
    //method to modify one random dna base and return that as the new dna
    mutate(){
        if (this.dna[Math.floor(Math.random() * 15)] !== returnRandBase()) {
        this.dna[Math.floor(Math.random() * 15)] = returnRandBase()
      } else {
        this.mutate;
      } return this.dna 
    },
    //method to compare two specimens dna and return the percent match
    compareDNA(object){
      let array = object.dna
      console.log(array)
      let total = []
      for (let a = 0; a < array.length; a++){
        if (array[a] === this.dna[a]){
         total.push(1);
        } else {
          total.push(0);
        } 
      } let sum = total.reduce((a, b) => a + b, 0);
      let matching = sum/15;
      return `specimen #${this.specimenNum} and specimen #${object.specimenNum} have ${matching}% DNA in common`
    },
    //method to check the DNA for C or G bases and return true if over 60%
    willLikelySurvive(){
      let occurances = []
      for(let b = 0; b < this.dna.length; b++){
        if (this.dna[b] === 'C' || this.dna[b] === 'G'){
          occurances.push(1);
        } else {
          occurances.push(0);
        } 
      } let likely = occurances.reduce((c, d) => c + d, 0);
      let hood = likely/15
      if (hood >= 0.6){
        return true;
      } else {
        return false;
      }
    },
    }
  }
  //function to create 30 specimen at one time
function create (){
  for (let i =0; i <= 30; i++){
    let f = pAequorFactory(i, mockUpStrand());
    console.log(f)
  }
}

console.log(create())
