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
    bot.vc = await bot.get_channel(937592731579080755).connect()
    bot.vc = await bot.get_channel(937964267481747486).connect()
#    bot.vc.play(discord.FFmpegOpusAudio('song2.mp3'))
    print("Ready!")

    while True:
            channel = bot.get_channel(937586830914756639)

            bot.vc.play(discord.FFmpegOpusAudio('12am.mp3'))
            await channel.send("**🔮┃Now Playing 12am Lofi!**")
            await asyncio.sleep(3783)
#            bot.vc.play(discord.FFmpegOpusAudio('1am.mp3'))
#            await channel.send("**🔮┃Now Playing 1am Lofi!**")
#            await asyncio.sleep(3673)
#            bot.vc.play(discord.FFmpegOpusAudio('2am.mp3'))
#            await channel.send("**🔮┃Now Playing 2am Lofi!**")
#            await asyncio.sleep(3741)
#            bot.vc.play(discord.FFmpegOpusAudio('3am.mp3'))
#            await channel.send("**🔮┃Now Playing 3am Lofi!**")
#            await asyncio.sleep(3606)
#            bot.vc.play(discord.FFmpegOpusAudio('4am.mp3'))
#            await channel.send("**🔮┃Now Playing 4am Lofi!**")
#            await asyncio.sleep(3707)
            
bot.run(os.getenv("token"))