# Schedule Library imported 
import schedule 
import time 
import shutil, os, fnmatch
import subprocess
import paramiko
import re
from pathlib import Path
from loguru import logger

dirPath="/upload"
dstDirPath="/archive"


# Functions setup 
def sudo_placement(): 
	print("Get ready for Sudo Placement at Geeksforgeeks") 

def good_luck(): 
	print("Good Luck for Test") 

def work(): 
	print("Study and work hard") 

def bedtime(): 
	print("It is bed time go rest") 
	
def fn(): 
      try:
        path, dirs, files = next(os.walk(dirPath))
        file_count=len(files)
        logger.debug("Number of files:: ", file_count)
        if (file_count > 0): 
           for filename in os.listdir(dirPath):
              f=os.path.join(dirPath,filename)
              match=re.search("\.filepart$",f)
              logger.debug("RegEx Match file name:: ",f)
              logger.debug("RegEx Match:: ",match)
              if os.path.isfile(f) and  not f.endswith(".filepart"):
                  try:  
                    logger.debug("filename:", filename)  
                    ssh = paramiko.SSHClient()
                    ssh.set_missing_host_key_policy(paramiko.AutoAddPolicy())
                    ssh.connect('10.240.65.4', username='root', password='S1h2a3rd@mnP456$%')
                    sftp = ssh.open_sftp()
                    dstPath=dstDirPath+"/"+filename
                    logger.debug("filename", filename)
                    logger.debug("filepath", f)
                    logger.debug("dstPath",dstPath)
                    sftp.put(f,dstPath)
                    sftp.close()
                    logger.debug("Uploaded Successsfully")
                    shutil.move(f, '/archive/'+filename) 
                  except AuthenticationException:
                      logger.error("authentication failed")
                  except SSHException as sshException:
                      logger.error("Unable to establish SSH connection")
                  except BadHostKeyException as badHostKeyException:
                      logger.error("Unable to verify server's host key: %s" % badHostKeyException)
                  finally:
                      ssh.close()
        else:        
         logger.debug("File transfer not yet initated") 
      except FileNotFoundError:
            logger.error("Directory: {0} does not exist".format(path))
      except NotADirectoryError:
            logger.error("{0} is not a directory".format(path))
      except PermissionError:
            logger.error("You do not have permissions to change to {0}".format(path))
# Task scheduling 
# After every 10mins fn() is called. 
schedule.every(1).minutes.do(fn) 

# After every hour fn() is called. 
#schedule.every().hour.do(fn) 

# Every day at 12am or 00:00 time bedtime() is called. 
#schedule.every().day.at("00:00").do(bedtime) 

# After every 5 to 10mins in between run work() 
#schedule.every(5).to(10).minutes.do(work) 

# Every monday good_luck() is called 
#schedule.every().monday.do(good_luck) 

# Every tuesday at 18:00 sudo_placement() is called 
#schedule.every().tuesday.at("18:00").do(sudo_placement) 

# Loop so that the scheduling task 
# keeps on running all time. 
while True: 

	# Checks whether a scheduled task 
	# is pending to run or not 
	schedule.run_pending() 
	time.sleep(1) 

