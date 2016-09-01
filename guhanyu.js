// https://zh.wiktionary.orrecs/zh/User:Wihwanrecs/古漢語常用字字典 (3934字)
fs=require("fs");
//file='guhanyu1.json';
file='guhanyu.json';
out=[];
txt=fs.readFileSync(file,'utf8').replace(/\n/g,'');
recs=JSON.parse(txt);
out.push(file+' length '+txt.length+' ('+recs.length+' records)');
out.push('========== record 0 ==========');
out.push(0+' '+recs[0]);
last=recs.length-1;
out.push('========== record '+last+' ==========');
out.push(last+' '+recs[last]);
char_books={}; // 每字 char 在 哪些書 char_books[char]
book_chars={}; // 每書 book 用 哪些字 book_chars[book]
for(i=0;i<recs.length;i++){
	rec=recs[i];
	char=rec[0]
//	out.push(i,char);
	for(j=1;j<rec.length;j++){
	rec[j].replace(/《(.*?)》/g,function(_,book){
			b=book.split(/·/)[0]; // 忽略篇名
			if(!char_books[char])char_books[char]=[];
			char_books[char].push(b);
			if(!book_chars[b])book_chars[b]=[];
			book_chars[b].push(char);
		})
	}
}
out.push('========== all chars ==========');
chars=Object.keys(char_books);
out.push('chars '+chars.length);
out.push(chars.join());
out.push('========== books in each char ==========');
chars.forEach(function(char,i){
	L=char_books[char];
	out.push(i+' '+char+'   '+L.length+' '+L.join());
});
out.push('========== all books ==========');
books=Object.keys(book_chars);
out.push('books '+books.length);
out.push(books.join());
out.push('========== chars in each book ==========');
book_count=[]; // 第 i 本書 book_count[i][0] 用字數 book_count[i][1]
books.forEach(function(book,i){
	L=book_chars[book];
	n=L.length;
	book_count[i]=[book,n];
	out.push(i+' '+book+'   '+n+' '+L.join());
});
book_count=book_count.sort(function(rec1,rec2){
	return rec1[1]-rec2[1];
});
out.push('========== books sorted by count ==========');
out.push(book_count.join('\n'));
fs.writeFileSync('guhanyu.lst',out.join('\n'));
console.log(out.join('\n'));