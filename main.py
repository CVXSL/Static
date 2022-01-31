import discord
from discord.ext import commands
import os
import asyncio
from dotenv import load_dotenv
load_dotenv()

bot = commands.Bot(
    command_prefix=commands.when_mentioned,
    help_command=None, description="Nalo Music Bot",
    activity=discord.Game("Loading..."),
    case_insensitive=True,
#    owner_id=355121277046095872,
    owner_id=852572302590607361,
    intents=discord.Intents.all()
)


@bot.event
async def on_ready():
    await bot.change_presence(activity=discord.Game("Music"))
#    bot.vc = await bot.get_channel(937540353878261810).connect()
#    bot.vc.play(discord.FFmpegOpusAudio('song2.mp3'))
    print("Ready!")

    while True:
            bot.vc = await bot.get_channel(937540353878261810).connect()
            bot.vc.play(discord.FFmpegOpusAudio('Promiscuous.mp3'))
            await asyncio.sleep(245)
            bot.vc.play(discord.FFmpegOpusAudio('Last Friday Night.mp3'))
            await asyncio.sleep(234)
            bot.vc.play(discord.FFmpegOpusAudio('Give Me Everything.mp3'))
            await asyncio.sleep(249)
            bot.vc.play(discord.FFmpegOpusAudio('Toxic.mp3'))
            await asyncio.sleep(203)

bot.run(os.getenv("token"))