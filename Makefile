ssh:
	ssh -v -i "C:\Users\lucas\LocalRepo\ssh-key.pem" ec2-user@ec2-54-91-239-252.compute-1.amazonaws.com
tar:
	tar -czvf lucas-gouvea.tar.gz .
clear:
	ssh -v -i "C:\Users\lucas\LocalRepo\ssh-key.pem" ec2-user@ec2-54-91-239-252.compute-1.amazonaws.com \
		'\
			rm -rf lucas-gouvea;\
			mkdir lucas-gouvea;\
		'
untar:
	ssh -v -i "C:\Users\lucas\LocalRepo\ssh-key.pem" ec2-user@ec2-54-91-239-252.compute-1.amazonaws.com \
		'\
			cd lucas-gouvea;\
			tar -xvf lucas-gouvea.tar.gz;\
			echo !! Finished !!;\
			echo !! Finished !!;\
			echo !! Finished !!;\
		'
scp:
	scp -v -i "C:\Users\lucas\LocalRepo\ssh-key.pem" -r lucas-gouvea.tar.gz ec2-user@ec2-54-91-239-252.compute-1.amazonaws.com:/home/ec2-user/lucas-gouvea
deploy:
	make tar
	make clear
	make scp
	make untar