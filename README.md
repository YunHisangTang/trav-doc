## Description
A collaborative platform for peolple to plan their trip together with rich text editor and Google Map.

## Deploy & Demo Link
- Deploy: http://140.112.183.237/

## How to Use
```
git clone git@github.com:kerorojason/trav-doc.git
cd trav-doc
npm install
npm run dev
```
不同使用者可以共同編輯左邊的文件，並且加上粗體、斜體、螢光筆、列表、程式碼區塊等格式，在文件中打"@"會跳出所有加入最愛的景點名稱，選擇後會在文件中加入淺藍底色的超連結，點擊連結後右邊的地圖會跳到此景點。
右半邊的地圖搜尋景點後點選加入最愛，即可和其他使用者分享這些景點，選擇兩個景點後點擊計算路程按鈕(汽車、行人、大眾工具)即可得到兩個景點間的推薦路線和路徑時間。

## System Description
- Front-end
    - 因為我們的整個網頁主要只有一個工作頁面，沒有太多的Component，所以決定不使用Redux來儲存state，而是用lifting state up 的方式來傳遞state。
    - 所有使用者共享的state（title, editorState, userAddedPlaces）都在App Component利用Web Socket和server做傳遞。
    - 地圖的部分是使用了Google Maps JavaSvript API  
- Back-end
    - 後端最困難的部分應該就是文件的共同編輯，為了解決複雜的編輯衝突，每個使用者的文件狀態更新後就會把文件狀態傳給server，server內會維持一個自己的文件狀態，每次收到使用者傳來的狀態，server就會把兩個狀態做diff，並且把diff broadcast給所有使用者，使用者再各自和自己的當前狀態patch產生新的狀態，用這樣的方式可以減少傳輸的資料量。
    - 後端使用cache儲存當前的狀態以減短存取時間，所以只要server開著這些狀態就會留著，當使用者按下save按鈕後狀態才會儲存到資料庫永久保存。
    

## Module Used

- Front-end
	- Editor:
    	- draft.js: editor component
    	- draft-js-plugins-editor: image drag and upload, mention
    	- debounce: debounce cursor moving event
	- Map : 
		- google-map-react
- Back-end
    - WebSocket
    - express-session
    - body-parser
    - uuid
    - jsondiffpatch
    - axios
	
## Reference
- collaborating: https://menubar.io/draft-js-collaborative-editor
- google-map-react: https://github.com/kerorojason/trav-doc
- Google Maps JavaScript API V3 Reference: https://developers.google.com/maps/documentation/javascript/reference/ 

## Contributions


	1. Editor(前後端、共同編輯)
	2. Editor和GoogleMap之間傳遞景點資訊。
	3. BackEnd(讓Editor和GoogleMap可以協作，並把狀態記錄在資料庫中)
	1. 版面設計
	2. Map基底(Map搜尋、標註、縮放等)
	3. 側邊欄的資料顯示
	4. 製作報告
	1. Map進階功能(導航等)
	2. 側邊欄導航資料顯示
	3. PIXNET的資料搜尋(因版面及作用有限最終沒放進來)

