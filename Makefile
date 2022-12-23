ssh:
	ssh -i "C:\Users\lucas\LocalRepo\ssh-key.pem" ec2-user@ec2-54-91-239-252.compute-1.amazonaws.com
build:
	yarn build
	tar -czvf lucas-gouvea.tar.gz .
clear:
	ssh -i "C:\Users\lucas\LocalRepo\ssh-key.pem" ec2-user@ec2-54-91-239-252.compute-1.amazonaws.com \
		'\
			rm -rf lucas-gouvea;\
			mkdir lucas-gouvea;\
		'
untar:
	ssh -i "C:\Users\lucas\LocalRepo\ssh-key.pem" ec2-user@ec2-54-91-239-252.compute-1.amazonaws.com \
		'\
			cd lucas-gouvea;\
			tar -xvf lucas-gouvea.tar.gz;\
			cd ..;\
			sudo chmod 777 lucas-gouvea -R;\
		'
		
forward_ports:
	ssh -i "C:\Users\lucas\LocalRepo\ssh-key.pem" ec2-user@ec2-54-91-239-252.compute-1.amazonaws.com \
	'\
		sudo iptables -A PREROUTING -t nat -i eth0 -p tcp --dport 80 -j REDIRECT --to-port 3000;\
		sudo iptables -A PREROUTING -t nat -i eth0 -p tcp --dport 443 -j REDIRECT --to-port 3000;\
	'
restart_pm2:
	ssh -i "C:\Users\lucas\LocalRepo\ssh-key.pem" ec2-user@ec2-54-91-239-252.compute-1.amazonaws.com \
		'\
			cd lucas-gouvea;\
			pm2 del 0;\
			pm2 start npm -- start;\
			echo !! Finished !!;\
			echo !! Finished !!;\
			echo !! Finished !!;\
		'
scp:
	scp -v -i "C:\Users\lucas\LocalRepo\ssh-key.pem" -r lucas-gouvea.tar.gz ec2-user@ec2-54-91-239-252.compute-1.amazonaws.com:/home/ec2-user/lucas-gouvea
deploy:
	make build
	make clear
	make scp
	make untar
	make forward_ports
	make restart_pm2