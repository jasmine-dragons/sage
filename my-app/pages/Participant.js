import React, { useState, useEffect, useRef } from "react";

const Participant = ({ participant }) => {
  const [videoTracks, setVideoTracks] = useState([]);
  const [audioTracks, setAudioTracks] = useState([]);

  const videoRef = useRef();
  const audioRef = useRef();

  useEffect(() => {
    const trackSubscribed = (track) => {
      if (track.kind === "video") {
        setVideoTracks((videoTracks) => [...videoTracks, track]);
      } else {
        setAudioTracks((audioTracks) => [...audioTracks, track]);
      }
    };

    const trackUnsubscribed = (track) => {
      if (track.kind === "video") {
        setVideoTracks((videoTracks) => videoTracks.filter((v) => v !== track));
      } else {
        setAudioTracks((audioTracks) => audioTracks.filter((a) => a !== track));
      }
    };

    const trackpubsToTracks = (trackMap) =>
      Array.from(trackMap.values())
        .map((publication) => publication.track)
        .filter((track) => track !== null);

    useEffect(() => {
      const trackSubscribed = (track) => {
        // implementation
      };

      const trackUnsubscribed = (track) => {
        // implementation
      };

      setVideoTracks(trackpubsToTracks(participant.videoTracks));
      setAudioTracks(trackpubsToTracks(participant.audioTracks));

      participant.on("trackSubscribed", trackSubscribed);
      participant.on("trackUnsubscribed", trackUnsubscribed);

      return () => {
        setVideoTracks([]);
        setAudioTracks([]);
        participant.removeAllListeners();
      };
    }, [participant]);

    useEffect(() => {
      const videoTrack = videoTracks[0];
      if (videoTrack) {
        videoTrack.attach(videoRef.current);
        return () => {
          videoTrack.detach();
        };
      }
    }, [videoTracks]);

    const remoteParticipants = participants.map((participant) => (
      <Participant key={participant.sid} participant={participant} />
    ));

    return (
      <div className="room">
        <h2>Room: {roomName}</h2>
        <button onClick={handleLogout}>Log out</button>
        <div className="local-participant">
          {room ? (
            <Participant
              key={room.localParticipant.sid}
              participant={room.localParticipant}
            />
          ) : (
            ""
          )}
        </div>
        <h3>Remote Participants</h3>
        <div className="remote-participants">{remoteParticipants}</div>
      </div>
    );
  });
};

export default Participant;
