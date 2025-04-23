const playSound = (file: string)=> {
    const audio = new Audio(file);
    audio.play().catch((error) => {
        console.log("Failed to play audio!" + error.message);
    });

    return audio;

};

export default playSound;