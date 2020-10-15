function setupUI(){
		document.querySelector("#trackSelectOne").onchange = e =>{
			audioElement.src = e.target.value;
			if (e.target.dataset.playing == "yes") {
				audioElement.pause();
				e.target.dataset.playing = "no";
			}
		};
		
		document.querySelector("#trackSelectTwo").onchange = e =>{
			audioElement2.src = e.target.value;
			if (e.target.dataset.playing == "yes") {
				audioElement2.pause();
				e.target.dataset.playing = "no";
			}
		};
		
		document.querySelector("#barColorSelect").onchange = e =>{
			barColor = e.target.value;
		};
		
		document.querySelector("#fsButton").onclick = e =>{
			canvasElement.webkitRequestFullscreen();
		};
		
		playButton1 = document.querySelector("#playButtonOne");
		playButton1.onclick = e => {
			if (audioCtx.state == "suspended") {
				audioCtx.resume();
			}

			if (e.target.dataset.playing == "no") {
				audioElement.play();
				e.target.dataset.playing = "yes";
			} 
			else if (e.target.dataset.playing == "yes") {
				audioElement.pause();
				e.target.dataset.playing = "no";
			}
		};
		
		playButton2 = document.querySelector("#playButtonTwo");
		playButton2.onclick = e => {
			if (audioCtx2.state == "suspended") {
				audioCtx2.resume();
			}

			if (e.target.dataset.playing == "no") {
				audioElement2.play();
				e.target.dataset.playing = "yes";
			} 
			else if (e.target.dataset.playing == "yes") {
				audioElement2.pause();
				e.target.dataset.playing = "no";
			}
		};
		
		document.querySelector('#tintRedCB').onchange= e =>{
				tintRed = e.target.checked;
			};
			
			document.querySelector('#invertCB').onchange= e =>{
				invert = e.target.checked;
			};
			
			document.querySelector('#sepiaCB').onchange= e =>{
				sepia = e.target.checked;
			};
		if(document.querySelector('#f').checked){
			soundType = "freq";
		}
		else if(document.querySelector('#w').checked){
			soundType = "wave";
		}
		
		document.querySelector('#twoSongs').onclick= e =>{
			if(singleSong){
				singleSong = false;
				audioElement2.play();
				e.target.dataset.playing = "yes";
			}
			else{
				singleSong = true;
			}
		}
		
		let volumeSlider = document.querySelector('#volumeSlider');
			volumeSlider.oninput = e => {
				gainNode.gain.value = e.target.value;
				gainNode2.gain.value = 2-e.target.value;
				volumeLabel.innerHTML = Math.round((e.target.value/2 * 100));
			};
			volumeSlider.dispatchEvent(new InputEvent("input"));
		let raySlider = document.querySelector('#raySlider');
		raySlider.oninput=e=>{
			lightLength = e.target.value/2*400;
			rayLabel.innerHTML = Math.Round((e.target.value/2 * 100));
		}
	}