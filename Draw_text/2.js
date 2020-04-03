
/** 
 * Created by Ruanyu Jian
 */  
var map=getCharsMap();  
/* 
 * Chuyển hình ảnh thành text 
 
 */  
function toChars(context, width, height, rowChars) {  
    var pixels = [],  
        output = "",  
        imageData = context.getImageData(0, 0, width, height),  
        rowChars = width < rowChars ? width : rowChars,  
        char_h = width / rowChars,  
        char_w = char_h,  
        rows = height / char_h,  
        cols = rowChars,  
     
        getBlockGray = function (x, y, w, h) {  
            var sumGray = 0, pixels;  
            for (var row = 0; row < w; row++) {  
                for (var col = 0; col < h; col++) {  
                    var cx = x + col,   
                        cy = y + row,   
                        index = (cy * imageData.width + cx) * 4,  
                        data = imageData.data,  
                        R = data[index],  
                        G = data[index + 1],  
                        B = data[index + 2],  
                        gray = ~~(R * 0.3 + G * 0.59 + B * 0.11);  
                    sumGray += gray;  
                }  
            }  
            pixels = w * h;  
            return ~~(sumGray / pixels);  
        };  
    for (var r = 0; r < rows; r++) {  
        for (var c = 0; c < cols; c++) {  
            var pos_x = ~~(c * char_h),  
                pos_y = ~~(r * char_h),  
                avg = getBlockGray(pos_x, pos_y, ~~char_w, ~~char_h),  
                ch = map[avg];  
            output += ch;  
        }  
        output += '\r\n';  
    }  
    ;  
    return output;  
}  
function getCharsMap() {  
    var chars = ['@', 'w', '#', '$', 'k', 'd', 't', 'j', 'i', '.', ' '];  
    var step = 25,  
        map = {};  
    for (var i = 0; i < 256; i++) {  
        var index = ~~(i / 25)  
        map[i] = chars[index];  
    }  
    ;  
    return map;  
}

1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
31
32
33
34
35
36
37
38
39
40
41
42
43
44
45
46
47
48
49
50
51
52
53
54
55
56
57
58
59
60
61
62
 
/** 
 * Created by Ruanyu Jian
 */  
var map=getCharsMap();  
/* 
 * Chuyển hình ảnh thành text 
 
 */  
function toChars(context, width, height, rowChars) {  
    var pixels = [],  
        output = "",  
        imageData = context.getImageData(0, 0, width, height),  
        rowChars = width < rowChars ? width : rowChars,  
        char_h = width / rowChars,  
        char_w = char_h,  
        rows = height / char_h,  
        cols = rowChars,  
     
        getBlockGray = function (x, y, w, h) {  
            var sumGray = 0, pixels;  
            for (var row = 0; row < w; row++) {  
                for (var col = 0; col < h; col++) {  
                    var cx = x + col,   
                        cy = y + row,   
                        index = (cy * imageData.width + cx) * 4,  
                        data = imageData.data,  
                        R = data[index],  
                        G = data[index + 1],  
                        B = data[index + 2],  
                        gray = ~~(R * 0.3 + G * 0.59 + B * 0.11);  
                    sumGray += gray;  
                }  
            }  
            pixels = w * h;  
            return ~~(sumGray / pixels);  
        };  
    for (var r = 0; r < rows; r++) {  
        for (var c = 0; c < cols; c++) {  
            var pos_x = ~~(c * char_h),  
                pos_y = ~~(r * char_h),  
                avg = getBlockGray(pos_x, pos_y, ~~char_w, ~~char_h),  
                ch = map[avg];  
            output += ch;  
        }  
        output += '\r\n';  
    }  
    ;  
    return output;  
}  
function getCharsMap() {  
    var chars = ['@', 'w', '#', '$', 'k', 'd', 't', 'j', 'i', '.', ' '];  
    var step = 25,  
        map = {};  
    for (var i = 0; i < 256; i++) {  
        var index = ~~(i / 25)  
        map[i] = chars[index];  
    }  
    ;  
    return map;  
}
 