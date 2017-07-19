// Electron Guid to  install
// المرشد في تثبيت الكترون

//inatall jeson
//تحميل ملف الجيسون
npm init
name []
version []
>>>>
main.js
 choice => yes 

//install electron
//تثبيت الكترون في ملف قرب الجيسون
npm install electron --save-dev --verbose

//coding
//مرحلة تكويد الملف الرئيسي 
build => main.js :

//---------------------------------------
const electron = require('electron');
const app = electron.app;

const path = require('path');
const url = require('url');

const BrowserWindow = electron.BrowserWindow;
// يمكنك تفعيلها او تعطيلها ان اردت ازالت الاغلاق للتطبيق
// var mainWindow = false; 
var mainWindow;
// تفعيل او تعطيل خاصية المطورين في تطبيقك
//mainWindow.openDevTools();
app.on('ready',function(){
	// يمكنك اضافة هذه الخاصية لازالة  ادوات التحكم بالفروم حتى تزيدها جمالا
	// romove or add frame: false or true 
	mainWindow = new BrowserWindow({width: 1024, height: 768,backgroundColor: '#2e2c29' });
	//mainWindow.loadURL('https://google.com');
	 mainWindow.loadURL(url.format({
		pathname: path.join(__dirname, 'index.html'),
		protocol: 'file:',
		slashes: true
	}));
	});
//----------------------------------------

//edit jeson file
//تعديل على ملف الجيسون  حتى يعمل التطبيق 
test =>  start , "electron ."
npm start 

//packager 
//التحزيم لجميع انظمة التشغيل 
download packager => npm install -g electron-packager
electron-packager .
electron-packager . --asar
electron-packager . --all

// fix jquery
//اصلاح الجيكواري 
<script>window.$ = window.jquery = require('./jquery.js');</script>

//connect mysql
//الاتصال بقواعد البينات 
nmp install mysql 
<div id="resultDiv"></div>
/*
var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : null,
  database : 'electron_db'
});
 
connection.connect();
$sql = 'SELECT `emp_id`,`emp_name` FROM `employee`';
connection.query($sql, function (error, results, fields) {
  if (error) throw error;
  console.log(results);
  $('#resultDiv').text(results[0].emp_name);
});
 
connection.end();
*/













