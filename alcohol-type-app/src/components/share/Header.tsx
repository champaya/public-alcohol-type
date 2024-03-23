import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import LiquorIcon from "@mui/icons-material/Liquor";
import { useNavigate } from "react-router-dom";
import useBackTop from "../../hooks/useBackTop";
import { CONSTANT } from "../../consts/constant";

const settings = ["トップに戻る"];

const ResponsiveAppBar = () => {
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
  const navigate = useNavigate();
  const backTop = useBackTop();

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleClickBack = () => {
    backTop();
    navigate(CONSTANT.ROUTE.DEFAULT);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: "#fff", zIndex: "1" }}>
      <Container>
        {/* タイトル */}
        <Toolbar disableGutters>
          <Typography
            variant="h5"
            noWrap
            sx={{
              color: "#696969",
              fontWeight: 700,
              letterSpacing: "0.3rem",
              cursor: "pointer",
            }}
          >
            <span onClick={handleClickBack}>おさけMBTI</span>
          </Typography>

          {/* お酒アイコンとメニュー */}
          <Box sx={{ flexGrow: 1, display: "flex", justifyContent: "end" }}>
            <Tooltip title="メニューを開く">
              <Button onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <LiquorIcon fontSize="large" sx={{ color: "#696969", margin: "0.1rem" }} />
              </Button>
            </Tooltip>
            <Menu
              sx={{ mt: "3rem" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem
                  key={setting}
                  onClick={() => {
                    handleCloseUserMenu();
                    handleClickBack();
                  }}
                >
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default ResponsiveAppBar;
