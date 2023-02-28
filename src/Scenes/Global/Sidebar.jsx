import { useState } from "react";
import { ProSidebarProvider, Menu, MenuItem } from "react-pro-sidebar";
import { Box, IconButton, Typography, useTheme} from "@mui/material";
import { Link } from "react-router-dom";
import { tokens } from "../../theme";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
//dashboard, log, p&l, orders
//import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
//import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
//import ShowChartIcon from '@mui/icons-material/ShowChart';
//import ReceiptIcon from '@mui/icons-material/Receipt';


const Sidebar = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [selected, setSelected] = useState("Dashboard");

    return (
        <Box 
            sx={{
                "& .pro-sidebar-inner": {
                    background: `${colors.primary[400]} !important`
                },
                "& .pro-icon-wrapper": {
                    backgroundColor: "transparent !important"
                },
                "& .pro-inner-item": {
                    padding: "5px 35px 5px 20px !important"
                },
                "& .pro-inner-item:hover": {
                    color: "#868dfb !important"
                },
                "& .pro-menu-item:active": {
                    color: "#6870fa !important"
                }
            }}
        >
            <ProSidebarProvider collapsed={isCollapsed}>
                <Menu iconShape="square">
                    <MenuItem
                        onClick={() => setIsCollapsed(!isCollapsed)}
                        icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
                        style={{
                            margin: "10px 0 20px 0",
                            color: colors.grey[100],
                        }}
                    >
                        {!isCollapsed && (
                            <Box
                                display="flex"
                                justifyContent="space-between"
                                alignItems="center"
                                ml="15px"
                            >
                                <Typography variant="h3" color={colors.grey[100]}>
                                    YO
                                </Typography>
                                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                                    <MenuOutlinedIcon />
                                </IconButton>
                            </Box>
                        )}
                    </MenuItem>

                    {/*user*/}
                    {!isCollapsed && (
                        <Box mb="25px">
                            <Box display="flex" justifyContent="center" alignItems="center">
                                <img 
                                    alt="profile-pic" 
                                    width="100px" 
                                    height="100px"
                                    src={require("../../assets/profile.png")}
                                    style={{ cursor: "pointer"}}
                                />
                            </Box>

                            <Box textAlign="center">
                                <Typography 
                                    variant="h2" 
                                    color={colors.grey[100]} 
                                    fontWeight="bold"
                                    sx={{m: "10px 0 0 0"}}>
                                    Michael Herndon
                                </Typography>
                                <Typography>Welcome Back</Typography>
                            </Box>
                        </Box>
                    )}
                </Menu>
            </ProSidebarProvider>
        </Box>
    );
}

export default Sidebar;