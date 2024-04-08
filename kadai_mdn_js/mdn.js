const now = new Date();

// 年月日を1つの文字列に結合し、「年」「月」「日」を付加
const formattedDate = now.getFullYear() + '年' + 
                      (now.getMonth() + 1) + '月' + 
                      now.getDate() + '日';
console.log(formattedDate);



