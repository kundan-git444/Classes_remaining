from math import floor
print("Enter number of subjects: ")
subject_count = int(input())
subjects = {'stm' : [45,34],'dwdm':[50,25]}
'''for i in range(subject_count):
    subject,conducted,attended = map(str,input().split())
    subjects[subject] = [int(conducted), int(attended)]'''
for i in subjects :
    conducted = subjects[i][0]
    attended = subjects[i][1]

    x = floor((4*attended - 3*conducted)/3 )
    if x<0:
        c = 3*conducted - 4*attended
        print("More",c,"classes to reach 75%")
    else:
        print(x,"classes can be skipped")
#print (tabulate(data, headers=["Pos", "Team", "Win", "Lose"]))