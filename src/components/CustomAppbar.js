import AppBar from "@mui/material/AppBar";
import MusicIcon from "@mui/icons-material/QueueMusic";
import Stack from "@mui/material/Stack";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

function CustomAppBar() {
    
    return (
        <AppBar position="sticky" color="secondary">
        <Toolbar>
          <MusicIcon sx={{ mr: 1 }} />
          <Typography variant="h6" color="#FFFFFF" noWrap>
            DREAM SHAPER
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          <Stack direction="row" spacing={5}>
            <Button href="/"color="inherit">HOME</Button>
            <Button href="produce" color="inherit">PRODUCE</Button>
            <Button href="signin" color="inherit">
              SIGN IN
            </Button>
          </Stack>
        </Toolbar>
      </AppBar>
    );
}

export default CustomAppBar;