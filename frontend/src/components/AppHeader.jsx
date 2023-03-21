import React, {useState} from 'react';
import '../App.css'
import {
    Header,
    Group,
    useMantineTheme,
    HoverCard,
    Text,
    ActionIcon,
    Burger,
    Drawer,
    NavLink
} from "@mantine/core";
import {IconSun, IconMoon, IconCalculator, IconGuitarPick} from '@tabler/icons-react';
import {useDisclosure} from "@mantine/hooks";


export default function AppHeader(props) {

    const [opened, { open, close, toggle }] = useDisclosure(false);

    const theme = useMantineTheme();
    const label = opened ? 'Close navigation' : 'Open navigation';


    return (
        <Header className="header-container" height={75}>
            <Drawer opened={opened} onClose={close} >
                <NavLink
                    label="Music Theory Calculator"
                    icon={<IconCalculator />}
                    size="0.8rem"
                    stroke={1}
                    active={props.isActive.calculator}
                    onClick={() => props.handleNavLinkClick("calculator")}
                    />
                <NavLink
                    label="Guitar Fretboard Visualizer"
                    icon={<IconGuitarPick />}
                    size="0.8rem"
                    stroke={1}
                    active={props.isActive.fretboard}
                    onClick={() => props.handleNavLinkClick("fretboard")}
                />
            </Drawer>
            <Burger
                opened={opened}
                onClick={toggle}
                aria-label={label} />
            <h1 className="Title" style={{ color: props.isDarkMode ? "white" : "black"}}>The Shred Shed</h1>

            <Group className="dark-mode-toggle">
                <HoverCard width={80} openDelay={1000} shadow="md">
                    <HoverCard.Target>
                        <Group>
                            <ActionIcon
                                onClick={props.handleToggle}
                                size="lg"
                                sx={(theme) => ({
                                    backgroundColor:
                                        props.isDarkMode ? theme.colors.dark[6] : theme.colors.blue[0],
                                    color: props.isDarkMode ? theme.colors.yellow[3] : theme.colors.blue[6],
                                })}
                            >
                                {props.isDarkMode ? <IconSun size="1.2rem" /> : <IconMoon size="1.2rem" />}
                            </ActionIcon>
                        </Group>
                    </HoverCard.Target>
                    <HoverCard.Dropdown>
                        <Text className="dark-mode-hover-text" fz="xs">
                            {props.isDarkMode ? "Light" : "Dark"} mode
                        </Text>
                    </HoverCard.Dropdown>
                </HoverCard>
            </Group>
        </Header>
    );
}