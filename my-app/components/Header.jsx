"use client";
import Link from "next/link";
import "./style.css";
import { usePathname } from "next/navigation";
import { AppBar, Box, Button, CssBaseline, Divider, Drawer, IconButton, List, ListItem, ListItemButton, ListItemText, Toolbar, Typography } from "@mui/material";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import Image from "next/image";

const drawerWidth = 240;
const links = [
  { href: "/", title: "Home" },
  { href: "/about", title:"about"},
  { href: "/store", title: "store" },
  { href: "/support", title: "support" }
];
function Header() {
  const path = usePathname();

  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Box sx={{ my: 2 }}>
        <Image src={"/logo.png"} width={70} height={40} alt="logo" />
      </Box>
      <Divider />
      <List>
        {links.map((item) => (
          <Link key={item.title} href={item.href} style={{ color: "black", textDecoration: "none" }}>
            <ListItem disablePadding>
              <ListItemButton sx={{ textAlign: "center" }}>
                <ListItemText primary={item.title} />
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar component="header" color="secondary" position="sticky">
        <Toolbar>
          <IconButton color="inherit" aria-label="open drawer" edge="start" onClick={handleDrawerToggle} sx={{ mr: 2, display: { sm: "none" } }}>
            <MenuIcon />
          </IconButton>
          <Box sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}>
            <Image src={"/logo.png"} width={70} height={40} alt="logo" />
          </Box>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {links.map((item, i) => {
              const activeStyle = { textDecoration: path === item.href ? "underline overline" : "none" };
              return (
                <Button key={i}>
                  <Link href={item.href} style={{ ...activeStyle, color: "white" }}>
                    {item.title}
                  </Link>
                </Button>
              );
            })}
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}

export default Header;
