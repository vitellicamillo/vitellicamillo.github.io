/*Program to log mixed messages in the console
author Danilo Vitelli Camillo
*/

function getRandomNumber() {
    return Math.floor(Math.random()*11);
}

const collectiveWisdow = {
    _starSign: ['Aries','Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo', 'Libra', 'Scorpio', 'Saggitarius', 'Capricorn', 'Aquarius', 'Pisces'], 
    _lotteryNumbers: [],

    get starSign () {
       let i = getRandomNumber();
       return this._starSign[i];
    },

    motivationalMessage () {
        let i = getRandomNumber();
        switch(i){
            case 0:
                return 'No one is to blame for your future situation but yourself. If you want to be successful, then become “Successful.'

            case 1:
                return 'All our dreams can come true, if we have the courage to pursue them.';

            case 2: 
                return 'The secret of getting ahead is getting started.'

            case 3:
                return 'The best time to plant a tree was 20 years ago. The second best time is now.'

            case 4:
                return 'It\’s hard to beat a person who never gives up.'

            case 5:
                return 'Write it. Shoot it. Publish it. Crochet it, sauté it, whatever. MAKE'
            
            case 6:
                return 'You can either experience the pain of discipline or the pain of regret. The choice is yours.'
            
            case 7:
                return 'Impossible is just an opinion.'
            
            case 8:
                return 'Your passion is waiting for your courage to catch up.'
            
            case 9:
                return 'Don’t be afraid to give up the good to go for the great.'
            
            case 10: 
                return 'Hold the vision, trust the process.'
            
            case 11:
                return '“One day or day one. You decide.'
        }
    },

    /**
     * @param {number[]} count
     */
    set lotteryNumbers (count) {
        while(this._lotteryNumbers.length <= count){
            let randomNumber = (Math.floor(Math.random()*60));
            if(!this._lotteryNumbers.includes(randomNumber)){
                this._lotteryNumbers.push(randomNumber)
            }
        }
    },

    get lotteryNumbers(){
        let sortedArray = this._lotteryNumbers.sort(function(a, b) {
            return a - b;
          });
          return sortedArray;
    }
}

collectiveWisdow.lotteryNumbers = 5;
console.log(`For the star sign : ${collectiveWisdow.starSign} \r
Motivational quote: ${collectiveWisdow.motivationalMessage()} \r
Lottery numbers: ${collectiveWisdow.lotteryNumbers} \r`)
