"use strict";

const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')
const canvasWidth = 400
const canvasHeight = 400

canvas.width = canvasWidth
canvas.height = canvasHeight

const horizonLength = 100
const verticalLength = 150
const lineWidth = 16
const ident = 22
const shapeWidth = horizonLength + (ident * 2) + (lineWidth * 2)
const shapeHeight = verticalLength + ident + lineWidth

let x = (canvasWidth - shapeWidth) / 2
let y = (canvasHeight - shapeHeight) / 2
const step = 25

ctx.fillStyle = '#fff'

renderCanvas = (x, y) => {
	ctx.fillRect(x + lineWidth + ident, y, horizonLength, lineWidth) // горизонт
	ctx.fillRect(x, y + lineWidth + ident, lineWidth, verticalLength) // левая
	ctx.fillRect(x + horizonLength + (ident * 2) + lineWidth, y + lineWidth + ident, lineWidth, verticalLength) // правая
}

renderCanvas(x, y)

document.addEventListener('keydown', (e) => {
	const { code } = e

	ctx.clearRect(0, 0, canvasWidth, canvasHeight)

	if (code === 'ArrowUp') {
		y = y - step
	} else if (code === 'ArrowDown') {
		y = y + step
	} else if (code === 'ArrowLeft') {
		x = x - step
	} else if (code === 'ArrowRight') {
		x = x + step
	}

	renderCanvas(x, y)

	if (x > canvasWidth - shapeWidth) {
		renderCanvas(x - canvasWidth, y)
	}

	if (x < 0) {
		renderCanvas(canvasWidth + x, y)
	}

	if (y < 0) {
		renderCanvas(x, canvasHeight + y)
	}

	if (y > canvasHeight - shapeHeight) {
		renderCanvas(x, y - canvasHeight)
	}

	if (x > canvasWidth - shapeWidth && y > canvasHeight - shapeHeight) {
		renderCanvas(x - canvasWidth, y - canvasHeight)
	}

	if (x < 0 && y < 0 ) {
		renderCanvas(x + canvasWidth, y + canvasHeight)
	}

	if (x < 0 && y > canvasHeight - shapeHeight) {
		renderCanvas(x + canvasWidth, y - canvasHeight)
	}

	if (x > canvasWidth - shapeWidth && y < 0) {
		renderCanvas(x - canvasWidth, y + canvasHeight)
	}

	if (x === (canvasWidth + (canvasWidth - shapeWidth) / 2) || x === -canvasWidth + (canvasWidth - shapeWidth) / 2) {
		x = (canvasWidth - shapeWidth) / 2
	}

	if (y === (canvasHeight + (canvasHeight - shapeHeight) / 2) || y === -canvasHeight + (canvasHeight - shapeHeight) / 2) {
		y = (canvasHeight - shapeHeight) / 2
	}
})
