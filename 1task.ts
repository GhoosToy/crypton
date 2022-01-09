interface Student {
    name: String;
    avgMark: number;
}
interface Statistics{
    avgMark: Number;
    highestMark: String;
    lowestMark: String;
}
function getStatistics(marks: Student[]): Statistics{
    let i,avgMarks =0, lowest = marks[0], highest = marks[0];
    for(i = 0; i< marks.length; i ++){
        avgMarks += marks[i].avgMark;
        if(marks[i].avgMark <= lowest.avgMark){
            lowest = marks[i];
        }
        if(marks[i].avgMark >= highest.avgMark){
            highest = marks[i];
        }
    }
    avgMarks /= marks.length;
    return {avgMark: avgMarks, highestMark: highest.name, lowestMark: lowest.name }
}

const testmarks = [{
        name: 'Vasya',
        avgMark: 3.75
    }, {
        name: 'Lena',
        avgMark: 4.89
    }]
console.log(getStatistics(testmarks));