    function superbowlWin(donkey){
        const result = donkey.find(blam => blam.result === `W`);
    return (result ? result.year: undefined);
    }