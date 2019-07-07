$(document).ready(function(){
	var isPlaying = false;
	var jukeBox = new JukeBox(["jump.mp3","Tango.mp3"]);

	$("#PlayB").click(function(){

		if(!isPlaying){
			$("#PlayB");
			jukeBox.play();
			isPlaying = true;

		}else{
			$("#PlayB");
			jukeBox.stop();
			isPlaying = false;
		}
	});

	$("#PreB").click(function(){
		jukeBox.previous();

	});

	$('#Next').click(function(){
		jukeBox.next();
	});
});



class JukeBox{
	/**
	*
	*@param {string array}
	*@private
	*/
	constructor(songList){

		/**
		*
		*@type {number}
		*
		*@type {string array}
		*
		*
		*@type {object(Audio)}
		*/

		this.index= 0;
		this.playlist = [];
		this.currentlyPlaying;
		this.path = 'audio/';
		this.playlist = this.addSongs(songList);


		if(this.playlist !== undefined){
			this.currentlyPlaying = this.playlist[this.index];
		}else{
			console.log("ERROR: No Songs Introduced To Jukebox");
			return;
		}
	}

	/**
	*
	*@param {string array} songs
	*
	*
	*@param {string array} extensions
	*/
	addSongs(songs){
		var tmpArray = [];
		for(var i = 0; i < songs.length; i++){
			tmpArray.push(new Audio(this.path + songs[i]));
		}
		return tmpArray;
	}

	play(){
		this.currentlyPlaying.play();
	}

	stop(){
		this.currentlyPlaying.pause();
	}

	load(){
		this.currentlyPlaying.load();
	}

	next(){
		this.index++;
		if(this.index >= this.playlist.length){
			this.index = 0;
		}

		console.log(this.index);

		this.load();
		this.currentlyPlaying = this.playlist[this.index];
		this.play();
	}

	previous(){
		this.index--;
		if(this.index < 0){
			this.index = this.playlist.length-1;
		}
		this.load();
		this.currentlyPlaying = this.playlist[this.index];
		this.play();
	}
}
