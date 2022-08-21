import React, { useState, useRef } from "react";
import "./Meditation.css";

import Player from "../../components/MusicPlayer/Player";
import Song from "../../components/MusicPlayer/Song";
import Library from "../../components/MusicPlayer/Library";
import Nav from "../../components/MusicPlayer/Nav";

import data from "./data";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import styled from "styled-components";


const Meditation = () => {
	window.scrollTo(0, 0)
	// Ref
	const audioRef = useRef(null);

	// State
	const [songs, setSongs] = useState(data());
	const [currentSong, setCurrentSong] = useState(songs[0]);
	const [isPlaying, setIsPlaying] = useState(false);
	const [libraryStatus, setLibraryStatus] = useState(false);
	const [songInfo, setSongInfo] = useState({
		currentTime: 0,
		duration: 0,
	});

	// Functions
	const updateTimeHandler = (e) => {
		const currentTime = e.target.currentTime;
		const duration = e.target.duration;
		setSongInfo({ ...songInfo, currentTime, duration });
	};

	const songEndHandler = async () => {
		let currentIndex = songs.findIndex((song) => song.id === currentSong.id);
		let nextSong = songs[(currentIndex + 1) % songs.length];
		await setCurrentSong(nextSong);

		const newSongs = songs.map((song) => {
			if (song.id === nextSong.id) {
				return {
					...song,
					active: true,
				};
			} else {
				return {
					...song,
					active: false,
				};
			}
		});
		setSongs(newSongs);

		if (isPlaying) {
			audioRef.current.play();
		}
	};

	return (
		<div>
			<Header />
			<div>
				<AppContainer libraryStatus={libraryStatus}>
					<Nav libraryStatus={libraryStatus} setLibraryStatus={setLibraryStatus} />
					<Song currentSong={currentSong} />
					<Player
						isPlaying={isPlaying}
						setIsPlaying={setIsPlaying}
						currentSong={currentSong}
						setCurrentSong={setCurrentSong}
						audioRef={audioRef}
						songInfo={songInfo}
						setSongInfo={setSongInfo}
						songs={songs}
						setSongs={setSongs}
					/>
					<Library
						songs={songs}
						setCurrentSong={setCurrentSong}
						audioRef={audioRef}
						isPlaying={isPlaying}
						setSongs={setSongs}
						libraryStatus={libraryStatus}
					/>
					<audio
						onLoadedMetadata={updateTimeHandler}
						onTimeUpdate={updateTimeHandler}
						onEnded={songEndHandler}
						ref={audioRef}
						src={currentSong.audio}
					/>
				</AppContainer>
			</div>
			<Footer />
		</div>
	);
};

const AppContainer = styled.div`
	transition: all 0.5s ease;
	margin-bottom: 5vh;
	margin-left: ${(p) => (p.libraryStatus ? "20rem" : "0")};
	@media screen and (max-width: 768px) {
		margin-left: 0;
	}
`;


export default Meditation;