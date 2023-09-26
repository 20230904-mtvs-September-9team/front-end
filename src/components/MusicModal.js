import React from "react";
import Modal from "@mui/material/Modal";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import PauseCircleOutlineIcon from "@mui/icons-material/PauseCircleOutline";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const MusicModal = ({ open, handleClose, currentMusic }) => {
  const [isPlaying, setIsPlaying] = React.useState(false);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="music-modal-title"
      aria-describedby="music-modal-description"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          width: "80%",
          backgroundColor: "#fff",
          borderRadius: "8px",
          padding: "16px",
          textAlign: "center",
        }}
      >
        <IconButton
          onClick={handleClose}
          sx={{
            position: "absolute",
            top: "8px",
            right: "8px",
          }}
        >
          <CloseIcon />
        </IconButton>
        <Typography variant="h5" id="music-modal-title">
          {currentMusic ? currentMusic.title : "No Title"} {/* null 체크 */}
        </Typography>
        <Box
          sx={{
            fontSize: "48px",
            marginTop: "16px",
          }}
        >
          {isPlaying ? (
            <PauseCircleOutlineIcon onClick={togglePlay} />
          ) : (
            <PlayCircleOutlineIcon onClick={togglePlay} />
          )}
        </Box>
        <Typography variant="body1" id="music-modal-description">
          {currentMusic ? currentMusic.content : "No Content"}
        </Typography>
      </Box>
    </Modal>
  );
};

export default MusicModal;
