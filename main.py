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
    bot.vc = await bot.get_channel(937540353878261810).connect()
    bot.vc.play(discord.FFmpegOpusAudio('song2.mp3'))
    print("Ready!")

    while True:
            await asyncio.sleep(33)
            bot.vc = await bot.get_channel(937540353878261810).connect()
            bot.vc.play(discord.FFmpegOpusAudio('song2.mp3'))

bot.run(os.getenv("token"))