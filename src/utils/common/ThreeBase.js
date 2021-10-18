import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
const el_default = document.getElementsByTagName('body')[0]
class ThreeBase {
	constructor(el = el_default) {
		this.width = el.clientWidth
		this.height = el.clientHeight
		this.init(el)
	}
	init(el) {
		this._scene = this.createScene()
		this._camera = this.createCamera()
		this._renderer = this.createRenderer(el)
		this._clock = new THREE.Clock()
		this._domElement = this._renderer.domElement
		// this._control = this.createControl()
		this._update = [] //用来存放更新动画的回调函数
		this.render()
	}
	createRenderer(el) {
		// const container = document.getElementById('app')
		const renderer = new THREE.WebGLRenderer({ antialias: true })
		renderer.setClearColor(0xeeeeee)
		renderer.setSize(this.width, this.height)
		el.innerHTML = ''
		el.appendChild(renderer.domElement)
		return renderer
	}
	createScene() {
		const scene = new THREE.Scene()
		scene.name = '默认场景'
		return scene
	}
	createCamera() {
		const rate = this.width / this.height
		const camera = new THREE.PerspectiveCamera(20, rate, 0.1, 2000)
		camera.position.set(-30, 40, 30)
		camera.lookAt(0, 0, 0)
		return camera
	}
	createControl() {
		const { _camera, _domElement } = this
		return new OrbitControls(_camera, _domElement)
	}
	render() {
		if (this.pause) return console.log('pause')
		const { _scene, _camera, _clock, _update } = this
		const delta = _clock.getDelta()
		this._renderer.render(_scene, _camera)
		_update.map(callback => callback instanceof Function && callback(delta))
		requestAnimationFrame(this.render.bind(this))
	}
	get scene() {
		return this._scene
	}
	get update() {
		return this._update
	}
}

export default ThreeBase
