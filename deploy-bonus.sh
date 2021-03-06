if [ $# -eq 0 ]
        then

                echo -e "Enter your choose\n 1)Deploy only IMG-PANDA service.\n 2)Deploy only SMART-PANDA service.\n 3)Depoloy both of them.\n --help for explanation"
                read -p "Your choise: " choise
else
        choise=$1
fi

case $choise in
1*)
        echo "Deploying img-panda service..."
        ansible-playbook util-img-panda.yml -i dev/hosts
;;
2*)
        echo "Deploying smart-panda service..."
        ansible-playbook util-smart-panda.yml -i dev/hosts
;;
3*)
        echo "Deploying all..."
        ansible-playbook util-img-panda.yml -i dev/hosts
        ansible-playbook util-smart-panda.yml -i dev/hosts
;;
--h*)
        echo -e "need help? OK...\n\tFor deploy only img-panda service(return random image) insert '1'"
        echo -e "\tFor deploy only smart-panda service(count POST req and return in GET req) insert '2'"
        echo -e "\tFor deploy both of them(recommended) insert '3'"
;;
esac
