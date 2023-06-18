import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";
import "../styles/navbar.style.css";
import "../styles/animations.style.css";
import logo from "../assets/img/logo.png";
import Input from "./input";
import Box from "./box";
import CustomButton from "./button";
import { Divider } from "@mui/material";
import { useLogin } from "../../../application/src/hooks";
import { SUBMIT } from "../../../application/src/constants";

export default function Navbar(): JSX.Element {
  const { handleLogin, handleChange } = useLogin();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (): void => {
    setAnchorEl(null);
  };
  return (
    <>
      <div className="relative">
        <div className="navbar">
          <div className="faic">
            <div className="w50 absolute left ml2">
              <div className="jcsb">
                <Typography className="underline cp ml2">Novedades</Typography>
                <Typography className="underline cp ml2">Eventos</Typography>
                <Typography className="underline cp ml2">Cursos</Typography>
                <Typography className="underline cp ml2">
                  Información
                </Typography>
              </div>
            </div>
            <div className="logo mt6">
              <img alt="logo" className="cp grow" src={logo} />
            </div>
            <div className="w50 absolute right mr2">
              <div className="jcsb">
                <Typography className="underline cp">Visitar</Typography>
                <Typography className="underline cp">Admisiones</Typography>
                <Typography className="underline cp">Instalaciones</Typography>
                <Typography className="underline cp">Dirección</Typography>
                <Tooltip title="Account settings">
                  <IconButton
                    onClick={handleClick}
                    size="small"
                    sx={{ ml: 2 }}
                    aria-controls={open ? "account-menu" : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? "true" : undefined}
                  >
                    <Avatar sx={{ width: 32, height: 32 }}>M</Avatar>
                  </IconButton>
                </Tooltip>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <form onSubmit={handleLogin}>
          <Box className="p3">
            <Box>
              <span>Iniciar sesión</span>
            </Box>
            <Divider />
            <Box className="mt5">
              <Input
                name="email"
                type="text"
                label="email"
                onChange={handleChange}
              />
            </Box>
            <Box className="mt5">
              <Input
                name="password"
                type="password"
                label="Contraseña"
                onChange={handleChange}
              />
            </Box>
            <Box className="mt5">
              <CustomButton type={SUBMIT} variant="contained" text="ACCEDER" />
            </Box>
          </Box>
        </form>
      </Menu>
    </>
  );
}
