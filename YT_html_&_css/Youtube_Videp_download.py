import yt_dlp

url = "https://youtu.be/0vA6d5d0524"

ydl_opts = {
    'outtmpl': '%(title)s.%(ext)s',
}

with yt_dlp.YoutubeDL(ydl_opts) as ydl:
    ydl.download([url])

print("Download complete!")





# from pytube import YouTube

# try:
#     # URL of the YouTube video
#     url = "https://youtu.be/VjJbp-1TABw?feature=shared"

#     # Create a YouTube object
#     yt = YouTube(url)

#     # Get the highest resolution stream available
#     stream = yt.streams.get_highest_resolution()

#     # Download the video
#     stream.download()

#     print("Download complete!")
# except Exception as e:
#     print(f"An error occurred: {e}")
