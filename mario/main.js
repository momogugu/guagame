const el = ele => document.querySelector(ele)

const log = console.log.bind(console)

const ajax = request => {
	let xmlhttp = new XMLHttpRequest()
	xmlhttp.open('GET', request.url, true)
	xmlhttp.responseType = 'arraybuffer'
	xmlhttp.onreadystatechange = (event) => {
		if (xmlhttp.readyState == 4) {
			request.callback(xmlhttp.response)
		}
	}
	xmlhttp.send()
}

/* 
nes 为二进制文件 
图片存在图块中
8*8 像素每个图块
2 bits 每个像素
16 bytes 每个图块

每页显示8＊8个图块
即64*64个像素
*/

window.offset = 32768

const drawNes = (bytes) => {
	// 78 69 16个bytes表示一个图块，有四种颜色
	// 0100 1110 0100 0101
	let canvas = el('#canvas')
	let context = canvas.getContext('2d')

	let blockSize = 8 // 每页有8个图块
	let pixelSize = 8 // 每个图块8个像素
	let pixelOfWidth = 10 // 每个像素的宽度为10
	let numberOfBytesPerBlock = 16 // 每个图块16bytes
	for (let i = 0; i < blockSize; i++) {
		for (let j = 0; j < blockSize; j++) {
			// 算出bytes
			let x = j * pixelSize * pixelOfWidth
			let y = i * pixelSize * pixelOfWidth
			let index = window.offset + (i * 8 + j) * numberOfBytesPerBlock
			drawBlock(context, bytes.slice(index), x, y, pixelOfWidth)
		}
	}
}
const drawBlock = (context, data, x, y, pixelWidth) => {
	const colors = [
		'white',
		'#fe0100',
		'#f7a43d',
		'#090000'
	]
	// log(data, x, y)
	let w = pixelWidth
	let h = pixelWidth
	// 每个图块为8*8像素
	for (let i = 0; i < 8; i++) {
		let p1 = data[i]
		let p2 = data[i+8]
		// log(p1, p2)
		// 16个bits每一行
		// 在j循环中，每一次画一个像素点
		for (let j = 0; j < 8; j++) {
			let c1 = (p1 >> (7 - j)) & 0b00000001
			let c2 = (p2 >> (7 - j)) & 0b00000001
			let pixel = (c2 << 1) + c1
			let color = colors[pixel]
			context.fillStyle = color
			let px = x + j * w
			let py = y + i * h
			// log(c1, c2, pixel, x, y)
			context.fillRect(px, py, w, h)
		}
	}
}
const actions = {
	change_offset(offset) {
		window.offset += offset
		el('h3').innerHTML = window.offset
		drawNes(window.bytes)
	}
}
const bindEvents = () => {
	el('.control').addEventListener('click', event => {
		let action = event.target.dataset.action
		let offset = Number(event.target.dataset.offset)
		actions[action] && actions[action](offset)
	})
}

const _main = () => {
	let request = {
		url: './mario.nes',
		callback(res) {
			window.bytes = new Uint8Array(res)
			// log(bytes)
			drawNes(bytes)
		}
	}
	ajax(request)
	bindEvents()
}

_main()